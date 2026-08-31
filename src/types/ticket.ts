export type TicketStatus = 'Open' | 'In Progress' | 'Closed'

export type TicketPriority = 'Low' | 'Medium' | 'High'

export interface Ticket {
    id: number
    title: string
    description: string
    status: TicketStatus
    priority: TicketPriority
}

export type TicketData = Omit<Ticket, 'id'>