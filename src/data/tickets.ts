import type { Ticket } from '../types/ticket'

export const tickets: Ticket[] = [    {
        id: 1,
        title: 'Unable to login',
        description: 'The user cannot log in to the system.',
        status: 'Open',
        priority: 'High',
    },
    {
        id: 2,
        title: 'Email notifications not working',
        description: 'Users are not receiving email notifications.',
        status: 'In Progress',
        priority: 'Medium',
    },
    {
        id: 3,
        title: 'Update profile information',
        description: 'The user needs help updating profile information.',
        status: 'Closed',
        priority: 'Low',
    },
    {
        id: 4,
        title: 'Report bug in the application',
        description: 'Found a bug in the application that needs to be fixed.',
        status: 'Open',
        priority: 'High',
    },
    {
        id: 5,
        title: 'Update profile information',
        description: 'The user needs help updating profile information.',
        status: 'Closed',
        priority: 'Low',
    },
]