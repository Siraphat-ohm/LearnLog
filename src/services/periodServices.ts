import { Prisma, Period } from "@prisma/client";
import prisma from "../configs/client";

export const getPeriodById = async <T extends Prisma.PeriodInclude | null>(
  id: string,
  include?: T
) => {
  const period = await prisma.period.findUniqueOrThrow({
    where: { id },
    include: include || undefined,
  });

  return period as Period & Prisma.PeriodGetPayload<{ include: T }>;
};