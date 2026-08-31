import { tickets } from '../data/tickets'
import type { TicketData, TicketStatus } from '../types/ticket'
export const ticketService = {
    getAll: () => tickets,

    getById: (id: number) =>
        tickets.find((ticket) => ticket.id === id),

    create: (data: TicketData) => {
        const ticket = {id: Math.max(0, ...tickets.map((ticket) => ticket.id)) + 1, ...data,}
        tickets.push(ticket)
        return ticket
    },

    update: (id: number, data: TicketData) => {
        const index = tickets.findIndex((ticket) => ticket.id === id)
        if (index === -1) return
        tickets[index] = { ...tickets[index], ...data }
        return tickets[index]
    },
    updateStatus: (id: number, status: TicketStatus) => {
        const index = tickets.findIndex((ticket) => ticket.id === id)
        if (index === -1) return
        tickets[index] = { ...tickets[index], status }
        return tickets[index]
    },
}