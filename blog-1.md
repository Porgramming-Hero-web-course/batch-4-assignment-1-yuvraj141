
input :string|number|detailsLog
union types are used when we have multiple data types
it can be used in objects as well.like this
{
 level:"info" | 'warn' | 'error'
}
for function parameter (id:string | number)
//intersection
intersection types are used to combine different types into a single type
interface Car{}
interface Bus{}
interface Bike{}
type Vehicle=Car & Bus & Bike