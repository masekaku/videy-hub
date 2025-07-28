'use client'

import { useEffect } from 'react'

type Props = {
  post?: string
  width?: string
}

export default function TelegramWidget({ post = "hyboped/2", width = "100%" }: Props) {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://telegram.org/js/telegram-widget.js?22"
    script.async = true
    script.setAttribute("data-telegram-post", post)
    script.setAttribute("data-width", width)
    script.setAttribute("data-userpic", "false")
    script.setAttribute("data-color", "13B4C6")
    script.setAttribute("data-dark-color", "39C4E8")

    const id = `telegram-${post.replace("/", "-")}`
    const container = document.getElementById(id)
    if (container) {
      container.innerHTML = ""
      container.appendChild(script)
    }
  }, [post, width])

  return (
    <div
      id={`telegram-${post.replace("/", "-")}`}
      className="my-6 border border-gray-300 rounded-md p-4"
    ></div>
  )
}