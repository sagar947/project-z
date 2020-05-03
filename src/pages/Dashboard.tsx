import React from 'react';
import { Nav, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import { CommandBar, ICommandBarItemProps, ICommandBarStyles } from 'office-ui-fabric-react/lib/CommandBar';
import { IButtonProps, PrimaryButton, IButtonStyles} from 'office-ui-fabric-react/lib/Button';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { useConstCallback } from '@uifabric/react-hooks'

const customButtonStyles: Partial<IButtonStyles> = {
  root: {
    height: '75%',
    margin: 'auto',
    backgroundColor: '#0078d4',
    borderRadius: '3px',
    color: '#fff'
  },
  rootHovered: {
    backgroundColor: '#106ebe',
    color: '#fff'
  }
}

const farButtonStyles: Partial<IButtonStyles> = {
  root: {
    minWidth: '50px',
    height: '45px'
  }
}

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: '100vh',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};

const firstCommandBarStyles: Partial<ICommandBarStyles> = {
  root: {
    backgroundColor: '#0078d4'
  },
  secondarySet: {
    backgroundColor: '#0078d4'
  },
  primarySet: {
    backgroundColor: '#0078d4'
  }
}

const FirstCommandBarButton: React.FunctionComponent<IButtonProps> = props => {
  return (
    <PrimaryButton {...props}></PrimaryButton>
  )
}

export const Dashboard: React.FunctionComponent = () => {
  const [isPanelOpen, setIsPanelOpen] = React.useState(false);

  const openPanel = useConstCallback(() => setIsPanelOpen(true));
  const dismissPanel = useConstCallback(() => setIsPanelOpen(false));

  const navLinkGroups: INavLinkGroup[] = [
    {
      links: [
        {
          name: 'Favorites',
          url: '',
          expandAriaLabel: 'Expand Home section',
          collapseAriaLabel: 'Collapse Home section',
          links: [
            {
              name: 'Inbox',
              url: '/inbox',
              key: 'key1',
              icon: 'Inbox'
            },
            {
              name: 'Sent Items',
              url: '/sent',
              key: 'key2',
              icon: 'Send'
            },
            {
              name: 'Drafts',
              url: '/drafts',
              key: 'key3',
              icon: 'Edit'
            },
          ],
          isExpanded: true,
        },
        {
          name: 'Folders',
          url: '',
          isExpanded: true,
          links: [
            {
              name: 'Inbox',
              url: '/inbox',
              key: 'key4',
              icon: 'Inbox'
            },
            {
              name: 'Drafts',
              url: '/drafts',
              key: 'key5',
              icon: 'Edit'
            },
            {
              name: 'Sent Items',
              url: '/sent',
              key: 'key6',
              icon: 'Send'
            },
            {
              name: 'Deleted Items',
              url: '/trash',
              key: 'key7',
              icon: 'Delete'
            },
          ],
        },
      ],
    },
  ];

  const _farItems: ICommandBarItemProps[] = [
    {
      key: 'chat',
      text: 'Chat',
      ariaLabel: 'Chat',
      iconOnly: true,
      iconProps: { iconName: 'SkypeForBusinessLogo' },
      buttonStyles: farButtonStyles
    },
    {
      key: 'myday',
      text: 'My Day',
      ariaLabel: 'MyDay',
      iconOnly: true,
      iconProps: { iconName: 'PrimaryCalendar' },
      buttonStyles: farButtonStyles
    },
    {
      key: 'settings',
      text: 'Settings',
      ariaLabel: 'Settings',
      iconOnly: true,
      iconProps: { iconName: 'Settings' },
      buttonStyles: farButtonStyles
    },
    {
      key: 'help',
      text: 'Help',
      // This needs an ariaLabel since it's icon-only
      ariaLabel: 'Help',
      iconOnly: true,
      iconProps: { iconName: 'Help' },
      buttonStyles: farButtonStyles
    },
    {
      key: 'whatsnew',
      text: 'What\'s New',
      ariaLabel: 'WhatsNew',
      iconOnly: true,
      iconProps: { iconName: 'Megaphone' },
      buttonStyles: farButtonStyles
    },
    {
      key: 'ringer',
      text: 'Notifications',
      ariaLabel: 'Ringer',
      iconOnly: true,
      iconProps: { iconName: 'Ringer' },
      buttonStyles: farButtonStyles
    },
    {
      key: 'user',
      text: 'Account manager for user',
      ariaLabel: 'User',
      iconOnly: true,
      iconProps: { iconName: 'Contact' },
      onClick: openPanel,
      buttonStyles: farButtonStyles
    }
  ];

  const _firstCommandBarItems = [
    {
      key: 'heading',
      text: 'Outlook',
      href: '/'
    }
  ];

  const _secondCommandBarItems: ICommandBarItemProps[] = [
    {
      key: 'toggleButton',
      text: 'Toggle',
      iconOnly: true,
      iconProps: {
        iconName: 'CollapseMenu'
      }
    },
    {
      key: 'newItem',
      text: 'New message',
      buttonStyles: customButtonStyles
    },
  ];

  return (
    <div>
      <div>
        <CommandBar
          items={_firstCommandBarItems}
          farItems={_farItems}
          buttonAs={FirstCommandBarButton}
          ariaLabel="Use left and right arrow keys to navigate between commands"
          styles={firstCommandBarStyles}
        />
      </div>
      <CommandBar
        items={_secondCommandBarItems}
        ariaLabel="Use left and right arrow keys to navigate between commands"
      />
      <Nav
        ariaLabel="Nav basic example"
        styles={navStyles}
        groups={navLinkGroups}
      />
      <Panel
        headerText="Sample panel"
        isOpen={isPanelOpen}
        onDismiss={dismissPanel}
        closeButtonAriaLabel="Close"
      >
        <p>Content goes here.</p>
      </Panel>
    </div>
  )
}