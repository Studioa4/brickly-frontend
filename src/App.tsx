import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './pages/Layout'
import Catasto from './pages/Catasto'
import Fornitori from './pages/Fornitori'
import Province from './pages/Province'
import Comuni from './pages/Comuni'
import Utenti from './pages/Utenti'
import RequireAuth from './components/RequireAuth'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }
      >
        <Route path="catasto" element={<Catasto />} />
        <Route path="fornitori" element={<Fornitori />} />
        <Route path="province" element={<Province />} />
        <Route path="comuni" element={<Comuni />} />
        <Route path="utenti" element={<Utenti />} />
        <Route index element={<></>} />
      </Route>
    </Routes>
  )
}
