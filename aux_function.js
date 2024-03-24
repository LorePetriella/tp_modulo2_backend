function processesArguments(arguments) {
    const slicedArgument = arguments.slice(1);
  
    const processedArguments = {};
  
    slicedArgument.forEach((param, index) => {
      if (param.startsWith('-')) {
        const propName = param.slice(1);
        processedArguments[propName] = slicedArgument[index + 1];
      }
    });
  

  for (const propiedad in processedArguments) {
    if (processedArguments[propiedad].includes('')) {
      processedArguments[propiedad] = processedArguments[propiedad].replaceAll(
        '_',
        ' '
      );
    }
  }

  return processedArguments;
}
  module.exports = processesArguments  

 