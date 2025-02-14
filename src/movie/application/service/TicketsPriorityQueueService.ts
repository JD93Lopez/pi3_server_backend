import NullTicket from '../../domain/model/ticket/NullTicket';
import Ticket from '../../domain/model/ticket/Ticket'

export default class TicketsPriorityQueueService {

  private static numeroBanco: number = 1
  public static numeroBancoActualPasar: number = 0
  private static numeroTurno: number = 1
  public static numeroTurnoActualAtendido: number = 0
  private static queuesMap: Map<string, { [priority: number]: Ticket[] }>

  private static getOfficePriorityQueue(lugar: string): { [priority: number]: Ticket[] } {
    let map = TicketsPriorityQueueService.queuesMap
    if (!map) {
      map = new Map()
      TicketsPriorityQueueService.queuesMap = map
    }
    const queue = map.get(lugar)
    if (queue) {
      return queue
    } else {
      const newQueue = {
        1: [],//normal
        2: [],//viejo
        3: [],//premium
        4: [],//viejo premium
      }
      map.set(lugar, newQueue)
      return newQueue
    }
  }

  public static enqueue(ticket: Ticket): void {
    const priority = TicketsPriorityQueueService.calculatePriority(ticket)

    ticket.setNumero(TicketsPriorityQueueService.numeroTurno++)

    const queue = TicketsPriorityQueueService.getOfficePriorityQueue(ticket.getCita().getLugar())[priority]
    if (queue) {
      queue.push(ticket)
    }
  }

  public static dequeue(lugar: string): Ticket {
    const queue = TicketsPriorityQueueService.getOfficePriorityQueue(lugar)
    if (queue) {
      for (let priority = 4; priority >= 1; priority--) {
        const internalQueue = queue[priority]
        if (internalQueue && internalQueue.length > 0) {
          const ticket = internalQueue.shift()
          return ticket ?? new NullTicket();
        }
      }
    }
    return new NullTicket();
  }

  public static dequeueTicket(lugar: string, numero: number): Ticket {
    const queue = TicketsPriorityQueueService.getOfficePriorityQueue(lugar);
    if (queue) {
      for (let priority = 4; priority >= 1; priority--) {
        const internalQueue = queue[priority];
        if (internalQueue && internalQueue.length > 0) {
          const ticketIndex = internalQueue.findIndex(ticket => ticket.getNumero() === numero);
          if (ticketIndex !== -1) {
            const [ticket] = internalQueue.splice(ticketIndex, 1);
            return ticket ?? new NullTicket();
          }
        }
      }
    }
    return new NullTicket();
  }
  
  public static searchTicket(lugar: string, numero: number): Ticket {
    const queue = TicketsPriorityQueueService.getOfficePriorityQueue(lugar);
    if (queue) {
      for (let priority = 4; priority >= 1; priority--) {
        const internalQueue = queue[priority];
        if (internalQueue && internalQueue.length > 0) {
          const ticketIndex = internalQueue.findIndex(ticket => ticket.getNumero() === numero);
          if (ticketIndex !== -1) {
            const ticket = internalQueue[ticketIndex]
            return ticket ?? new NullTicket();
          }
        }
      }
    }
    return new NullTicket();
  }

  public static listifyPriorityQueue(lugar: string): Ticket[] {
    const queue = TicketsPriorityQueueService.getOfficePriorityQueue(lugar)
    if (queue) {
      const tickets: Ticket[] = []
      for (let priority = 4; priority >= 1; priority--) {
        const internalQueue = queue[priority]
        if (internalQueue) {
          tickets.push(...internalQueue)
        }
      }
      return tickets
    }
    return []
  }

  public static getNumeroBanco(): number {
    return TicketsPriorityQueueService.numeroBanco++
  }

  private static enAtencion: number[] = [];

  public static getNumeroTurnoActualAtendido(lugar: string): number {
    const tickets = TicketsPriorityQueueService.listifyPriorityQueue(lugar);
    
    for (let i = 0; i < tickets.length; i++) {
      const ticketNext = tickets[i];
      if(ticketNext){
        const numero = ticketNext.getNumero();
    
        if (!this.enAtencion.includes(numero)) {
          this.enAtencion.push(numero);
          return numero;
        }
      }
    }
    
    return 0;
  }

  private static calculatePriority(ticket: Ticket): number {
    const cliente = ticket.getCita().getCliente()
    const mayorDe60 = TicketsPriorityQueueService.mayorDe60(cliente.getFechaNatal())
    if (cliente.getPrioridad() === 'NORMAL') {
      if (!mayorDe60) {
        return 1
      } else {
        return 2
      }
    } else {
      if (!mayorDe60) {
        return 3
      } else {
        return 4
      }
    }
  }

  private static mayorDe60(fechaNatal: Date): boolean {
    const fechaActual = new Date();

    const edad = fechaActual.getFullYear() - fechaNatal.getFullYear();

    const mesNacimiento = fechaNatal.getMonth();
    const mesActual = fechaActual.getMonth();
    const diaNacimiento = fechaNatal.getDate();
    const diaActual = fechaActual.getDate();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
      return edad - 1 >= 60;
    }

    return edad >= 60;
  }

}
