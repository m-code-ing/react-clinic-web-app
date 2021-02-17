import React from 'react'
import classes from './SearchBar.module.css';

export default function SearchBar() {
    return (
        <div>
            <form action="">
                <input type="text" placeholder="Seach"/>
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
    )
}
