import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useRouter } from 'next/router'
const Autocomplete = () => {
  const router = useRouter()
  const handleClick = (e) =>{
    e.preventDefault()
    router.push(e.target.id)
  }
    const items = [
        {
          id: 0,
          name: 'rooms'
        },
        {
          id: 1,
          name: 'suite'
        },
        {
          id: 2,
          name: 'penthouse'
        },
      ]
      const handleOnSelect = (item) => {
        // the item selected
        router.push(`/apartments#${item.name}`)
      }
    return (
        <div style={{width:"100%"}}>
           <ReactSearchAutocomplete
            items={items}
            placeholder={'Search for Rooms...'}
            onSelect={handleOnSelect}
            styling={
                {
                    border:'none',
                    borderRadius:'none',
                    boxShadow:'none',
                    iconColor:'black',
                    lineColor: 'black',
                    width:'100%',
                    fontFamily:'Chillax-Regular'
                }}
            autoFocus
          /> 
        </div>
    )
}

export default Autocomplete
