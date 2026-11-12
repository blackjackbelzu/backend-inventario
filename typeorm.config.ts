import {DataSource} from "typeorm"

TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: 'postgresql',
  database: 'bd_inventario',
  entities: [User],
  synchronize: false,
}),