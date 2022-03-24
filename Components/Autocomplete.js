import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const Autocomplete = () => {
    const items = [
        {
          id: 0,
          name: 'Rooms'
        },
        {
          id: 1,
          name: 'Suites'
        },
        {
          id: 2,
          name: 'Penthouse'
        },
      ]
    return (
        <div style={{width:"100%"}}>
           <ReactSearchAutocomplete
            items={items}
            placeholder={'Search for Rooms, Apartments or Penthouses...'}
            styling={
                {
                    border:'none',
                    borderRadius:'none',
                    boxShadow:'none',
                    iconColor:'black',
                    lineColor: 'black',
                    width:'100%',
                }}
            autoFocus
          /> 
        </div>
    )
}

export default Autocomplete
