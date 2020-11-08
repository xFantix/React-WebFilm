import React from 'react';
import {StyleContainer,FormStyle,InputStyle,ButtonStyle,HeaderStyle} from './styleSearchFilm';
const SearchFilm = () => {
    return ( 
        <StyleContainer>
            <HeaderStyle>Search The Film</HeaderStyle>
            <FormStyle>
                <InputStyle placeholder="Tittle" type="text"/>
                <ButtonStyle>GO</ButtonStyle>
            </FormStyle>
        </StyleContainer>
     );
}
 
export default SearchFilm;