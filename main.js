function wasCalledWithNew() {
  const calledWithNew = typeof new.target !== 'undefined' || 
                       (this instanceof wasCalledWithNew && this.constructor === wasCalledWithNew);
  return {
      valueOf: function() {
          return calledWithNew;
      }
  };
}