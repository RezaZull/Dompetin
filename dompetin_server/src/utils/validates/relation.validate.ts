/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service';

export type relationConstraitInput = {
  tableName: string;
  column: string;
};
export function Relation(
  options: relationConstraitInput,
  validationOptions?: ValidationOptions,
) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      name: 'Relation',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [options],
      validator: {
        async validate(
          value: any,
          args: ValidationArguments,
        ): Promise<boolean> {
          const { tableName, column }: relationConstraitInput =
            args.constraints[0];
          const prisma: PrismaService = new PrismaService();
          const prismaRes = await prisma[tableName].findMany({
            where: {
              [column]: value,
            },
          });
          return prismaRes.length > 0;
        },

        defaultMessage(validationArguments: ValidationArguments): string {
          return `${validationArguments.property} Not Found`;
        },
      },
    });
  };
}
