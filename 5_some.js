var operatives = [
    { id: name: "Johan", polis: false },
    { id: name: 'Frida', polis: true  },
    { id: name: 'Gustav', polis: false },
    { id: name: 'Simon', polis: false }
  ];


  //Du kan nu använda dig av .some() för att se vilka av de givna personerna/elementen i arrayen som är poliser. Some() kommer att console.log ut an bolien, där elemntet antignegn är en polis(true) eller inte (false).
const polis = operatives.some(operative => operative.polis);