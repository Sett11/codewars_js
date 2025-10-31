function hasLoop(indices) {
    if (indices.length === 0) return false;
    
    const visited = new Set();
    let current = 0;
    
    while (true) {
        if (visited.has(current)) return true;
        
        visited.add(current);
        const next = indices[current];
        if (next === undefined || next >= indices.length) return false;
        
        current = next;
    }
}