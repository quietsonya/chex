import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Column, DataType, Model, Table, HasMany, BelongsToMany } from 'sequelize-typescript'
import { ChatUser } from 'src/chats/models/chat-user.model'
import { Chat } from 'src/chats/models/chats.model'
import { Game } from 'src/games/models/games.model'

@Table({ tableName: 'users' })
export class User extends Model<User> {

    @ApiProperty({ type: String, format: 'uuid', example: 'ff1a1780-aff9-45c9-8025-714fb78b2cb1' })
    @Column({ type: DataType.UUID, unique: true, primaryKey: true, defaultValue: DataType.UUIDV4 })
        id: string

    @ApiProperty({ type: String })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
        username: string

    @ApiProperty({ type: String, format: 'email' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
        email: string

    @ApiProperty({ type: String, format: 'password' })
    @Column({ type: DataType.STRING, allowNull: false })
        password: string

    @ApiProperty({ type: Date })
    @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
        lastSeen: Date

    @ApiProperty({ type: Boolean })
    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
        isAdmin: boolean



    @ApiPropertyOptional({ type: [ Game ] })
    @HasMany(() => Game)
        games: Game[]

    @ApiPropertyOptional({ type: [ Chat ] })
    @BelongsToMany(() => Chat, () => ChatUser)
        chats: Chat[]

}