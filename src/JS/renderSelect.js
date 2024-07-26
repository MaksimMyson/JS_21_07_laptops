export function renderSelect(dataArray, elementLink) {
    const sortedDataArray = dataArray.sort();
    sortedDataArray.forEach((data) => {
        const optionElement = `<option value="${data}">${data}</option>`;
        elementLink.insertAdjacentHTML('beforeend', optionElement);
    });
}
