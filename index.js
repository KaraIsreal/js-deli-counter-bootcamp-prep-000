var deliLine = [];

function takeANumber(deliLine, name){
  deliLine.push(name);
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`;
}

function nowServing(deliLine){
  if (deliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${deliLine.shift()}.`;}
}

function currentLine(line){
  if (deliLine.length === 0){
    return "The line is currently empty.";
  } else {
    var line = [];
    for (let i = 0; i > line.length; i++);
    line.push(i)
  return `The line is currently: ${line.length()}`;}
}
