class Component {
  
  #id;
  #parent;
  #children;
  #visibility;
  
  constructor(id, children) {
    this.#id = id;
    this.#children = children || [];
    this.#visibility = null;
    this.#parent = null;
    this.#children.forEach(child => child.#parent = this);
  }
  
  set visibility(value) {
    this.#visibility = value;
  }
  
  get isVisible() {
    if (this.#visibility !== null) {
      return this.#visibility;
    }
    
    // Для корневого компонента с null Visibility возвращаем true
    if (this.#parent === null) {
      return true;
    }
    
    // Ищем ближайшего предка с non-null Visibility
    let ancestor = this.#parent;
    while (ancestor !== null) {
      if (ancestor.#visibility !== null) {
        return ancestor.#visibility;
      }
      ancestor = ancestor.#parent;
    }
    
    // Если все предки имеют null Visibility, возвращаем true
    return true;
  }
  
  toString() {
    return this.#id;
  }
}