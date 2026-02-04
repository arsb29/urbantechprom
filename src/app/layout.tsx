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
      <body>{children}</body>
    </html>
  )
}
