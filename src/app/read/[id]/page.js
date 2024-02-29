// 사용자에게 정보를 제공한다: Server Component
export default async function Read(props) {
  const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`)
  const topic = await resp.json()
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  )
}
