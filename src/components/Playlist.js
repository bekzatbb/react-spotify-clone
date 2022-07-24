import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import PlaylistContextMenu from './PlaylistContextMenu'
import PlaylistCover from './PlaylistCover'
import PlaylistButtonPlay from './PlaylistButtonPlay'
import PlaylistTitle from './PlaylistTitle'
import PlaylistDescription from './PlaylistDescription'

const menuItems = [
  {
    label: 'Add to Your Library',
  },
  {
    label: 'Share',
    subMenuItems: [
      {
        label: 'Copy link to playlist',
      },
      {
        label: 'Embed playlist',
      },
    ],
  },
  {
    label: 'About recommendations',
  },
  {
    label: 'Open in Desktop app',
  },
];

const clickPosition = { x: null, y: null };

function Playlist({ classes, coverUrl, title, description, toggleScrolling }) {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const contextMenuRef = useRef(null);

  const bgClasses = isContextMenuOpen
    ? 'bg-[#272727]'
    : 'bg-[#181818] hover:bg-[#272727]'

  function updateContextMenuPosition() {
    contextMenuRef.current.style.top = `${clickPosition.y}px`;
    contextMenuRef.current.style.left = `${clickPosition.x}px`;
  }

  useLayoutEffect(() => {
    toggleScrolling(!isContextMenuOpen);

    if (isContextMenuOpen) {
      updateContextMenuPosition();
    }
  });

  useEffect(() => {
    if (!isContextMenuOpen) return;

    function handleClickAway(event) {
      // body...
    }
  });

  function openContextMenu(event) {
    event.preventDefault();

    clickPosition.x = event.clientX;
    clickPosition.y = event.clientY;

    setIsContextMenuOpen(true);
  }

  function closeContextMenu() {
    setIsContextMenuOpen(false);
  }

	return (
		<a href="/" 
       className={ `relative p-4 rounded-md duration-200 group ${classes} ${bgClasses}` }
       onContextMenu={ openContextMenu }
       onClick={(event) => event.preventDefault()}
    >
      <div className="relative">
      	<PlaylistCover url={ coverUrl } />
      	<PlaylistButtonPlay />
      </div>
      <PlaylistTitle title={ title } />
      <PlaylistDescription description={ description } />
      { isContextMenuOpen && (
        <PlaylistContextMenu
          ref={ contextMenuRef }
          menuItems={ menuItems }
          onClose={ closeContextMenu }
          classes="fixed bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10 hidden group-hover:block"
      />) }
    </a>
	)
}

export default Playlist