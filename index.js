function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${`${name}`}. You are number ${array.length} in line.`;
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
  if (katzDeli.length === 0) {
  return "The line is currently empty.";
  }
}

/*
    describe('currentLine(line)', () => {
    it('returns "The line is currently empty." if no one is in line', () => {
      expect(currentLine([])).toEqual("The line is currently empty.");
    });

    it('says who is in line when there are people waiting', () => {
      expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
    });
  });
})
*/