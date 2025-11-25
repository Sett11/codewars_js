function movie(card, ticket, perc) {
    let systemA = 0;
    let systemB = card;
    let currentTicketPrice = ticket * perc;
    let n = 0;
    
    while (Math.ceil(systemB) >= systemA) {
        n++;
        systemA = ticket * n;
        systemB += currentTicketPrice;
        currentTicketPrice *= perc;
    }
    
    return n;
};