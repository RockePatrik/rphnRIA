
/**
 * @param {MessageEvent} evt mensaje recibido de la interfaz gráfica. La
 * property data tiene los datos enviados con hilo.postMessage(modelo). */
onmessage = evt => {
  // Calcula y envía de regreso la respuesta a la interfaz gráfica.
  // @ts-ignore
  postMessage(`Suma de  ${evt.data.numero1} + ${evt.data.numero2} = ${parseFloat(evt.data.numero1)+parseFloat(evt.data.numero2)}`);
};
