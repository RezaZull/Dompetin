/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service'; // Import PrismaService

export type IsUniqueConstraintInput = {
  tableName: string;
  column: string;
};

// The custom decorator function
export function IsUnique(
  options: IsUniqueConstraintInput,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'IsUnique',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [options],
      validator: {
        async validate(
          value: any,
          args: ValidationArguments,
        ): Promise<boolean> {
          const { tableName, column }: IsUniqueConstraintInput =
            args.constraints[0];

          // Access PrismaService to query the database
          const prisma: PrismaService = new PrismaService(); // Create an instance of PrismaService

          // Query the database for existing records using Prisma
          const records = await prisma[tableName].findMany({
            where: {
              [column]: value,
            },
          });

          // If records found, return false (meaning the value is not unique)
          return records.length === 0; // No existing record found, return true for uniqueness
        },

        defaultMessage(validationArguments: ValidationArguments): string {
          return `${validationArguments.property} already exists`; // Default message if validation fails
        },
      },
    });
  };
}
