import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useRooms } from '@/http/use-rooms'
import { dayjs } from '@/lib/dayjs'
import { Badge } from './ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

export function RoomList() {
  const { data, isLoading } = useRooms()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
        <CardDescription>
          Acesso rápido para as salas criadas recentemente.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {isLoading && (
          <p className="text-muted-foreground text-sm">Carregando salas...</p>
        )}
        {data?.map((room) => {
          return (
            <Link
              className="justfy-between flex items-center rounded-lg border p-3 hover:bg-accent/50"
              key={room.id}
              to={`/room/${room.id}`}
            >
              <div className="flex flex-1 flex-col gap-1">
                <h3 className="font-medium">{room.name}</h3>
                <div className="flex items-center gap-2">
                  <Badge className="text-xs" variant="default">
                    {dayjs(room.createdAt).toNow()}
                  </Badge>
                  <Badge className="text-xs" variant="default">
                    {room.questionsCount} pergunta(s)
                  </Badge>
                </div>
              </div>
              <Badge
                className="flex items-center gap-1 text-sm"
                variant="secondary"
              >
                Entrar <ArrowRight className="size-3" />
              </Badge>
            </Link>
          )
        })}
      </CardContent>
    </Card>
  )
}
