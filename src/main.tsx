import { StrictMode } from 'react'
import { ConfigProvider } from 'antd'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
        token: {
            colorPrimary: '#1677ff',
            colorBgLayout: '#f0f5ff',
            borderRadius: 8,
        },
        }}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>,
)
