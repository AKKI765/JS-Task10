function runArrayMethods() {
    const numbers = [1, 2, 3, 4, 5];

    // Clear previous output
    document.getElementById('output').innerHTML = '';

    // Push method
    numbers.push(6);
    printOutput('Push Method: ' + numbers);

    // Pop method
    const popped = numbers.pop();
    printOutput('Pop Method: ' + numbers + ' (Popped element: ' + popped + ')');

    // Shift method
    const shifted = numbers.shift();
    printOutput('Shift Method: ' + numbers + ' (Shifted element: ' + shifted + ')');

    // Unshift method
    numbers.unshift(0);
    printOutput('Unshift Method: ' + numbers);

    // Slice method
    const sliced = numbers.slice(2, 4);
    printOutput('Slice Method: ' + sliced);

    // Splice method
    const spliced = numbers.splice(1, 2);
    printOutput('Splice Method: ' + numbers + ' (Removed elements: ' + spliced + ')');

    // Concat method
    const newArray = numbers.concat([6, 7]);
    printOutput('Concat Method: ' + newArray);

    // Reverse method
    numbers.reverse();
    printOutput('Reverse Method: ' + numbers);

    // Sort method
    numbers.sort();
    printOutput('Sort Method: ' + numbers);

    // Map method
    const squared = numbers.map(num => num * num);
    printOutput('Map Method: ' + squared);

    // Filter method
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    printOutput('Filter Method: ' + evenNumbers);

    // Reduce method
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    printOutput('Reduce Method: ' + sum);

    // Every Method
    const every = numbers.every((val)=>val>3) ;
    printOutput('Every Method: ' + every);

    // some Method
    const some = numbers.some((val)=>val>3) ;
    printOutput('Some Method: ' + some);

    // JOIN Method
    const join= numbers.join();
    printOutput('Join Method: ' + join);

  }

  function printOutput(output) {
    const outputDiv = document.getElementById('output');
    const p = document.createElement('p');
    p.textContent = output;
    outputDiv.appendChild(p);
  }