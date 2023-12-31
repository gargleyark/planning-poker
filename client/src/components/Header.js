import Avatar from 'react-avatar'
import './Header.css'

export function Header({ username }) {
  return (
    <header>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.2"
        viewBox="0 0 406 66"
        width="406"
        height="66"
      >
        <title>template</title>
        <g id="Border-top">
          <g id="christmas"></g>
          <g id="christmas"></g>
          <g id="christmas"></g>
          <g id="christmas"></g>
          <g id="christmas"></g>
          <g id="christmas"></g>
        </g>
        <path id="Bar" class="s0" d="m398.7 1h6.9v64.6h-6.9z" />
        <path
          id="Shape 1"
          class="s0"
          d="m37.2 62.8l24.7-23.6q9.1-9 9.1-17.7 0-8.7-5-13.6-5.1-4.9-13.9-4.9-2.5 0-5.1 0.8-2.5 0.9-4.7 2.3-2.2 1.5-3.8 2.7-1.6 1.3-3 2.7-1.4-1.4-3-2.7-1.6-1.2-3.8-2.7-2.2-1.4-4.7-2.3-2.6-0.8-5.1-0.8-8.8 0-13.9 4.9-5 4.9-5 13.6 0 2.6 0.9 5.4 1 2.8 2.2 4.8 1.1 1.9 2.6 3.8 1.6 1.9 2.2 2.6 0.7 0.7 1.1 1l24.8 23.7q0.7 0.8 1.7 0.8 1 0 1.7-0.8z"
        />
        <path
          id="Online Planning Poker"
          class="s1"
          aria-label="Online Planning Poker"
          d="m212.7 53c0-3.5-2.7-6-6.1-6-3.4 0-6.1 2.5-6.1 6 0 3.6 2.7 6.1 6.1 6.1 3.4 0 6.1-2.5 6.1-6.1zm-9.7 0c0-2.4 1.4-3.9 3.6-3.9 2.1 0 3.6 1.5 3.6 3.9 0 2.4-1.5 4-3.6 4-2.2 0-3.6-1.6-3.6-4zm18 6h2.4v-5.5c0-2.6-1.6-4.1-3.8-4.1-1.2 0-2.2 0.6-2.8 1.4v-1.2h-2.4v9.4h2.4v-5.2c0-1.5 0.8-2.3 2.1-2.3 1.3 0 2.1 0.8 2.1 2.3zm4.7 0h2.3v-12.6h-2.3zm4.7 0h2.4v-9.4h-2.4zm1.2-10.5c0.8 0 1.5-0.6 1.5-1.4 0-0.8-0.7-1.4-1.5-1.4-0.9 0-1.5 0.6-1.5 1.4 0 0.8 0.6 1.4 1.5 1.4zm10.1 10.5h2.4v-5.5c0-2.6-1.6-4-3.8-4-1.2 0-2.2 0.5-2.8 1.3v-1.2h-2.4v9.4h2.4v-5.2c0-1.5 0.8-2.3 2.1-2.3 1.3 0 2.1 0.8 2.1 2.3zm8.7-7.6c1.2 0 2.2 0.8 2.2 2h-4.4c0.1-1.3 1.1-2 2.2-2zm4.5 4.7h-2.6c-0.3 0.6-0.9 1.1-1.9 1.1-1.2 0-2.1-0.8-2.3-2.2h6.9c0.1-0.3 0.1-0.6 0.1-0.9 0-2.8-1.9-4.7-4.6-4.7-2.8 0-4.8 1.9-4.8 4.9 0 3 2 4.9 4.8 4.9 2.3 0 3.8-1.4 4.4-3.1zm8.4-3.6v-3.4h1.8c1.4 0 2 0.6 2 1.7 0 1.1-0.6 1.7-2 1.7zm6.3-1.7c0-2-1.4-3.7-4.3-3.7h-4.3v11.9h2.3v-4.5h2c3.1 0 4.3-1.9 4.3-3.7zm1.7 8.2h2.4v-12.6h-2.4zm4.1-4.7c0 2.9 1.9 4.9 4.3 4.9 1.5 0 2.6-0.7 3.1-1.5v1.3h2.4v-9.4h-2.4v1.4c-0.5-0.8-1.6-1.5-3.1-1.5-2.4 0-4.3 1.9-4.3 4.8zm7.4 0c0 1.8-1.2 2.8-2.5 2.8-1.3 0-2.5-1-2.5-2.8 0-1.8 1.2-2.7 2.5-2.7 1.3 0 2.5 0.9 2.5 2.7zm11.3 4.7h2.4v-5.5c0-2.6-1.6-4-3.7-4-1.3 0-2.3 0.5-2.9 1.3v-1.2h-2.4v9.4h2.4v-5.2c0-1.5 0.8-2.3 2.1-2.3 1.3 0 2.1 0.8 2.1 2.3zm11.3 0h2.3v-5.5c0-2.6-1.5-4-3.7-4-1.2 0-2.2 0.5-2.9 1.3v-1.2h-2.3v9.4h2.3v-5.2c0-1.5 0.9-2.3 2.2-2.3 1.2 0 2.1 0.8 2.1 2.3zm4.6 0h2.4v-9.4h-2.4zm1.2-10.5c0.8 0 1.5-0.6 1.5-1.4 0-0.8-0.7-1.4-1.5-1.4-0.8 0-1.5 0.6-1.5 1.4 0 0.8 0.7 1.4 1.5 1.4zm10.1 10.5h2.4v-5.5c0-2.6-1.6-4-3.8-4-1.2 0-2.2 0.5-2.8 1.3v-1.2h-2.4v9.4h2.4v-5.2c0-1.5 0.8-2.3 2.1-2.3 1.3 0 2.1 0.8 2.1 2.3zm4-4.7c0 2.9 2 4.9 4.3 4.9 1.5 0 2.6-0.8 3.2-1.6v1.5c0 1.7-1.1 2.5-2.4 2.5-1.2 0-2-0.6-2.3-1.4h-2.3c0.2 2.1 2 3.5 4.7 3.5 3.1 0 4.7-2.1 4.7-4.6v-9.5h-2.4v1.4c-0.6-0.9-1.7-1.5-3.2-1.5-2.3 0-4.3 1.8-4.3 4.8zm7.5 0c0 1.8-1.2 2.8-2.5 2.8-1.3 0-2.5-1-2.5-2.8 0-1.8 1.2-2.8 2.5-2.8 1.3 0 2.5 1 2.5 2.8zm11.1-1.8v-3.4h1.9c1.3 0 1.9 0.6 1.9 1.7 0 1.1-0.6 1.7-1.9 1.7zm6.3-1.7c0-2-1.5-3.6-4.3-3.6h-4.4v11.8h2.4v-4.5h2c3 0 4.3-1.9 4.3-3.7zm10.7 3.5c0-3-2.1-4.8-4.8-4.8-2.7 0-4.9 1.8-4.9 4.8 0 3 2.1 4.9 4.8 4.9 2.8 0 4.9-1.9 4.9-4.9zm-7.2 0c0-1.9 1.1-2.8 2.4-2.8 1.2 0 2.4 0.9 2.4 2.8 0 1.9-1.2 2.8-2.5 2.8-1.3 0-2.3-0.9-2.3-2.8zm9 4.7h2.4v-4l3.2 4h3.1l-4.2-4.7 4.1-4.7h-3.1l-3.1 4v-7.2h-2.4zm14-7.6c1.2 0 2.2 0.8 2.2 2.1h-4.5c0.2-1.3 1.1-2.1 2.3-2.1zm4.4 4.7h-2.5c-0.3 0.6-0.9 1.1-1.9 1.1-1.2 0-2.2-0.8-2.3-2.1h6.9c0-0.4 0.1-0.7 0.1-1 0-2.8-2-4.6-4.7-4.6-2.8 0-4.7 1.9-4.7 4.8 0 3 2 4.9 4.7 4.9 2.3 0 3.9-1.4 4.4-3.1zm4.4-1.7c0-1.9 0.8-2.4 2.2-2.4h0.7v-2.5c-1.3 0-2.3 0.6-2.9 1.6v-1.5h-2.4v9.4h2.4z"
        />
        <path
          id="PokerPlanning"
          class="s1"
          aria-label="PokerPlanning"
          d="m94.6 17.3v-7.1h3.8c2.7 0 3.9 1.4 3.9 3.6 0 2.2-1.2 3.5-3.9 3.5zm14.7-3.5c0-5.2-3.5-9.1-10.5-9.1h-11.1v28.3h6.9v-10.2h4.2c7.3 0 10.5-4.3 10.5-9zm25.6 7.9c0-7.1-5.1-11.5-11.7-11.5-6.6 0-11.7 4.4-11.7 11.5 0 7.2 5 11.6 11.6 11.6 6.6 0 11.8-4.4 11.8-11.6zm-16.4 0c0-3.8 2.2-5.6 4.7-5.6 2.4 0 4.7 1.8 4.7 5.6 0 3.8-2.3 5.6-4.8 5.6-2.5 0-4.6-1.8-4.6-5.6zm20.1 11.3h6.9v-9.4l6.8 9.4h8.6l-9.5-11.2 9.4-11.3h-8.5l-6.8 9.1v-16.5h-6.9zm34.8-17.3c2.3 0 4.3 1.4 4.3 3.9h-8.7c0.4-2.5 2.2-3.9 4.4-3.9zm10.8 9.9h-7.3c-0.6 1.2-1.7 2.1-3.6 2.1-2.3 0-4.1-1.3-4.3-4.3h15.6c0.1-0.7 0.1-1.3 0.1-2 0-6.8-4.6-11.2-11.2-11.2-6.7 0-11.4 4.4-11.4 11.6 0 7.1 4.8 11.6 11.4 11.6 5.6 0 9.6-3.4 10.7-7.8zm11.1-3c0-3.9 1.9-5 5.1-5h1.9v-7.3c-3 0-5.5 1.6-7 4v-3.8h-6.9v22.5h6.9zm17.2-5.2v-7.1h3.8c2.7 0 3.9 1.4 3.9 3.6 0 2.2-1.2 3.5-3.9 3.5zm14.7-3.5c0-5.2-3.5-9.1-10.4-9.1h-11.2v28.3h6.9v-10.2h4.3c7.2 0 10.4-4.3 10.4-9zm3.6 19.2h6.9v-29.9h-6.9zm10.5-11.3c0 7.1 4.4 11.6 9.9 11.6 3.3 0 5.7-1.5 7-3.5v3.2h6.9v-22.5h-6.9v3.2c-1.2-2-3.6-3.5-7-3.5-5.5 0-9.9 4.4-9.9 11.5zm16.9 0.1c0 3.6-2.3 5.5-5 5.5-2.5 0-4.9-2-4.9-5.6 0-3.6 2.4-5.5 4.9-5.5 2.7 0 5 2 5 5.6zm27.4 11.2h6.9v-13.1c0-6.1-3.5-9.6-8.7-9.6-3 0-5.5 1.3-6.8 3.2v-3h-6.9v22.5h6.9v-12.2c0-3.1 1.7-4.8 4.3-4.8 2.6 0 4.3 1.7 4.3 4.8zm27.2 0h6.9v-13.2c0-6-3.5-9.6-8.7-9.6-3 0-5.4 1.4-6.8 3.3v-3h-6.9v22.5h6.9v-12.2c0-3.1 1.7-4.8 4.3-4.8 2.6 0 4.3 1.7 4.3 4.8zm11.7 0h6.9v-22.6h-6.9zm3.5-24.8c2.4 0 4-1.7 4-3.7 0-2.1-1.6-3.8-4-3.8-2.5 0-4.2 1.7-4.2 3.8 0 2 1.7 3.7 4.2 3.7zm23.9 24.8h6.9v-13.1c0-6.1-3.5-9.6-8.7-9.6-3 0-5.4 1.3-6.8 3.2v-3h-6.9v22.5h6.9v-12.2c0-3.1 1.7-4.7 4.3-4.7 2.6 0 4.3 1.6 4.3 4.7zm10.3-11.3c0 7.1 4.4 11.6 9.9 11.6 3.4 0 5.7-1.5 7-3.5v3.2c0 3.8-2.1 5.1-4.7 5.1-2.4 0-4.1-1-4.5-2.7h-6.8c0.6 5.3 4.9 8.7 11.6 8.7 7.8 0 11.3-5.1 11.3-11.1v-22.5h-6.9v3.2c-1.2-2-3.6-3.5-7-3.5-5.5 0-9.9 4.4-9.9 11.5zm16.9 0.1c0 3.5-2.3 5.5-4.9 5.5-2.6 0-5-2-5-5.6 0-3.6 2.4-5.5 5-5.5 2.6 0 4.9 2 4.9 5.6z"
        />
        <path
          id="Shape 2"
          fill-rule="evenodd"
          class="s2"
          d="m53.9 43.5q-0.1-1.3-0.4-2.9-0.2-1.6-0.7-2.9-0.4-1.4-1.1-2.6-0.7-1.3-1.6-2.2-0.9-0.9-2.3-1.4-1.3-0.6-2.9-0.6-0.2 0-1.1 0.6-0.9 0.6-2 1.3-1 0.7-2.8 1.3-1.7 0.5-3.5 0.5-1.8 0-3.5-0.5-1.8-0.6-2.8-1.3-1.1-0.7-2-1.3-0.9-0.6-1.1-0.6-1.6 0-2.9 0.6-1.4 0.5-2.3 1.4-0.9 0.9-1.6 2.2-0.7 1.2-1.1 2.6-0.5 1.3-0.7 2.9-0.3 1.6-0.4 2.9-0.1 1.4-0.1 2.8 0 3.2 1.9 5.1 1.9 1.9 5.1 1.9h23q3.2 0 5.1-1.9 1.9-1.9 1.9-5.1 0-1.4-0.1-2.8zm-18.4-31.5q-4.2 0-7.1 3-3 3-3 7.3 0 4.3 3 7.3 2.9 3 7.1 3 4.2 0 7.1-3 3-3 3-7.3 0-4.3-3-7.3-2.9-3-7.1-3z"
        />
      </svg>
      {username && (
        <div>
          <Avatar name={username} size={36} round="17px" color={'#544098'} />
        </div>
      )}
    </header>
  )
}
