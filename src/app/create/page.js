'use client'

import { useRouter } from 'next/navigation'

export default function Create() {
  const router = useRouter() // redirection
  return (
    <form
      // Client Component
      onSubmit={(e) => {
        e.preventDefault() // submit 이벤트 전달 막기
        const title = e.target.title.value
        const body = e.target.body.value
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, body }),
        }
        fetch(`http://localhost:9999/topics`, options)
          .then((res) => res.json())
          .then((result) => {
            console.log(result)
            const lastid = result.id // lastid를 redirection 시키기 위해 useRouter 사용(import 주소 주의! navigation으로 해야 함)
            router.push(`/read/${lastid}`)
          })
      }}
    >
      <p>
        <input type="text" name="title" placeholder="Title" />
      </p>
      <p>
        <textarea name="body" placeholder="Body" />
      </p>
      <p>
        <input type="submit" value="Create" />
      </p>
    </form>
  )
}
