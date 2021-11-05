const url = new URL(window.location.href);

function addVat(price = 0)
{
    return price * 1.25;
}

function formatPrice(price = 0)
{
    return price.toLocaleString("da-DK",
    {
        style: "currency" ,
        currency: "DKK",
    });
}

const basePrice = Number(url.searchParams.get("rentalPrice"));
const formattedBasePrice = formatPrice(basePrice);

// Set values from URL parameters
document.getElementById("rental-car").innerText = url.searchParams.get("car")
document.getElementById("rental-days").innerText = url.searchParams.get("days")
document.getElementById("rental-price").innerText = url.searchParams.get("price")

const form = document.querySelector("form");
const ialt = document.getElementById("ialt");

// Update price when checkboxes are selected
form.addEventListener("change", function()
{
    let extraPris = 0 + Number(document.getElementById("rental-price").innerText = url.searchParams.get("price")) ;
    for (const Udstyr of form.elements.Udstyr)
    {
        if (Udstyr.checked === true)
        {
          const numericValue = Number(Udstyr.value);
          extraPris += addVat(numericValue);
        }
    }

    ialt.innerText = extraPris;
});

//TODO: Save data when is submitted to
form.addEventListener("submit", function(event)
{
    //Beregn pris for det valgte ektraudstyr
    let extraPrice = 0;
    let extraList = [];
    for (const item of this.elements.Udstyr)
    {
        if (item.checked === true)
        {
            const numericValue = Number(item.value);
            extraPrice += addVat(numericValue);
            extraList.push(item.parentNode.innerText)

        }

    }

    sessionStorage.setItem("extraPrice", extraPrice);
    sessionStorage.setItem("extrasList", extraList.join(", "))

    sessionStorage.setItem("car", url.searchParams.get("car"));
    sessionStorage.setItem("days", url.searchParams.get("days"));
    sessionStorage.setItem("dateFrom", url.searchParams.get("dateFrom"));
    sessionStorage.setItem("dateTo", url.searchParams.get("dateTo"));
    sessionStorage.setItem("rental-Price", url.searchParams.get("price"));

});

















