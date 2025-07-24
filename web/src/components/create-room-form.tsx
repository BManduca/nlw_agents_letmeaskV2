import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

export function CreateRoomForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Criar Sala</CardTitle>
        <CardDescription>
          Crie uma nova sala para começar a fazer perguntas e receber respostas
          da I.A.
        </CardDescription>
      </CardHeader>
      <CardContent />
    </Card>
  )
}
