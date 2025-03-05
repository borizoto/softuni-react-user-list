export default {
    dateIsoConverter(dateStr) {
        const date = new Date(dateStr);

        const formatedDate = date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
        }); 

        return formatedDate;
    }
}