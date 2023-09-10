import { Form } from './Form'

export function Votes({ username }) {
  return (
    <section className="history">
      <Form username={username} />
    </section>
  )
}
