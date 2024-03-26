import { OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";    


export class PrismaService extends PrismaClient implements OnModuleInit {

    onModuleInit() {
        this.$connect()
            .then(() => console.log('Connected to DB'))
            .catch((err) => console.log(err));
    }

}