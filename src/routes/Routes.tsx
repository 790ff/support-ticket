import { Route, Routes } from 'react-router-dom'
import AppLayout from '../components/AppLayout'
import CreateTicketPage from '../pages/CreateTicketPage'
import EditTicketPage from '../pages/EditTicketPage'
import TicketDetailsPage from '../pages/TicketDetailsPage'
import TicketListPage from '../pages/TicketListPage'

function AppRoutes() {
    return (
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<TicketListPage />} />
                    <Route
                        path="tickets/create"
                        element={<CreateTicketPage />}
                    />
                    <Route
                        path="tickets/:ticketId/edit"
                        element={<EditTicketPage />}
                    />
                    <Route
                        path="tickets/:ticketId"
                        element={<TicketDetailsPage />}
                    />
                </Route>
            </Routes>
    )
}

export default AppRoutes