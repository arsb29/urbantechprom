import type { Metadata } from 'next'
import {ReactNode} from "react";
import './globals.css'

export const metadata: Metadata = {
  title: 'УРБАНТЕХПРОМ - Корпоративный центр компетенций',
  description: 'Инженерные, инвестиционные и управленческие ресурсы для реализации проектов в сфере создания вычислительных комплексов и объектов газовой генерации',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ru">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      <title>УРБАНТЕХПРОМ</title>
    </head>
    <body>{children}</body>
    </html>
  )
}
