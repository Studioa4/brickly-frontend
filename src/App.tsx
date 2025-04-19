import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './pages/Layout'
import Catasto from './pages/Catasto'
import Fornitori from './pages/Fornitori'
import Province from './pages/Province'
import Comuni from './pages/Comuni'
import Utenti from './pages/Utenti'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="catasto" element={<Catasto />} />
        <Route path="fornitori" element={<Fornitori />} />
        <Route path="province" element={<Province />} />
        <Route path="comuni" element={<Comuni />} />
        <Route path="utenti" element={<Utenti />} />
        <Route index element={<></>} /> {/* mostra solo il layout senza redirect */}
      </Route>
    </Routes>
  )
}
