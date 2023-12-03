import { PrismaClient, Prisma } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export const generateId = () => {
    const id = uuidv4();
    return id.slice(id.length - 5, id.length - 1);
}

async function main() {

  const subjects: Prisma.SubjectCreateInput[] = [
    {
      id: "ว30224",
      name: "Chemistry"
    },
    {
      id: "ท30205",
      name: "Thai"
    },
    {
      id: "ศ30213",
      name: "Drawing"
    }
  ]

  const teachers: Prisma.TeacherCreateInput[] = [
    {
      id: "1",
      firstname: "Mildred",
      lastname: "Murphy",
      classroom: {
        connect: {
          id : "609"
        }
      }
    },
    {
      id: "2",
      firstname: "Helen",
      lastname: "Villanueva",
      classroom: {
        connect: {
          id : "608"
        }
      }      
    },
    {
      id: "3",
      firstname: "Margaret",
      lastname: "Acevedo",
      classroom: {
        connect: {
          id : "607"
        }
      }      
    },
    {
      id: "4",
      firstname: "Dorothy",
      lastname: " Osborne",
    },
    {
      id: "5",
      firstname: "Ruth",
      lastname: "Hoffman"
    }
  ];

  const periods : Prisma.PeriodCreateInput[] = [
    { 
      id: "1",
      subject: {
        connect: {
          id: "ว30224"
        }
      },
      teacher: {
        connect: {
          id: "1"
        }
      },
      classroom: {
        connect: {
          id: "609"
        }
      }
    },
    { 
      id: "2",
      subject: {
        connect: {
          id: "ท30205"
        }
      },
      teacher: {
        connect: {
          id: "2"
        }
      },
      classroom: {
        connect: {
          id: "607"
        }
      }
    },
    { 
      id: "3",
      subject: {
        connect: {
          id: "ศ30213"
        }
      },
      teacher: {
        connect: {
          id: "3"
        }
      },
      classroom: {
        connect: {
          id: "607"
        }
      }
    }
  ];

  await prisma.classroom.createMany({
      data: [
          { id: "609", name: "6/9" },
          { id: "608", name: "6/8" },
          { id: "607", name: "6/7" }
      ]
  });

  await prisma.student.createMany({
      data: [
          { id: generateId(), firstname: "Siraphat", lastname: "Thappa", classroomId: "609" },
          { id: generateId(), firstname: "Bussayamas", lastname: "Kaewpitak", classroomId: "609" },
          { id: generateId(), firstname: "Jadyn", lastname: "Agocs", classroomId: "608" },
          { id: generateId(), firstname: "Lim", lastname: "Ready", classroomId: "608" },
          { id: generateId(), firstname: "Kamari", lastname: "Baarda", classroomId: "608" },
          { id: generateId(), firstname: "Munashe", lastname: "Langenberg", classroomId: "607" },
          { id: generateId(), firstname: "Ulloriaq", lastname: "Janvier", classroomId: "607" },
          { id: generateId(), firstname: "Chikelu", lastname: "Vinter", classroomId: "607" },
      ]
  });

  await Promise.all(
    teachers.map( async(teacher) => {
      await prisma.teacher.create({
        data: teacher
      });
    })
  );

  await Promise.all(
    subjects.map( async(subject) => {
      await prisma.subject.create({
        data: subject
      })
    })
  );

  await Promise.all(
    periods.map( async(period) => {
      await prisma.period.create({
        data: period
      })
    })
  )

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });