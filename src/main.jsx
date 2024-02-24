import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom'
import './index.css'

import { 
  Construction,
} from './components/exporter.jsx'

const router = createBrowserRouter([
  {
    index: true,
    element: <Construction />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)