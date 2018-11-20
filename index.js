function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  if(katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${katzDeli.shift()}.`;
  }
} 

function currentLine(katzDeli) {
  var array = [];
  
  if(katzDeli.length === 0) {
    return "The line is currently empty.";
  }
  
    for(var i = 0; i < katzDeli.length; i++) {
    array.push(`${i + 1}. ${katzDeli[i]}`);
    }
    return `The line is currently: ${array.join(", ")}`;
}

/*
  it('says who is in line when there are people waiting', () => {
      expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
    });
  });
})

*/