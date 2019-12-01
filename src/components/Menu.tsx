import React from 'react'
import {
  IonText,
  IonIcon,
  IonMenu,
  IonItem,
  IonList,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonContent,
  IonMenuToggle
} from '@ionic/react'
import { Components } from '@ionic/core'
import { locate } from 'ionicons/icons'

interface Link {
  path: string
  title: string
  icon: any
  direction: 'none' | 'forward' | 'back'
}

interface Props extends Partial<Components.IonMenu> {
  title?: string
  toolbarColor?: string
  links?: Link[]
}

const defaultLinks: Link[] = [
  { path: '/launches', title: 'Launches', icon: locate, direction: 'back' }
]

const Menu: React.FC<Props> = props => {
  const {
    title = 'Menu',
    toolbarColor = 'tertiary',
    contentId = 'main-content',
    links = defaultLinks,
    ...rest
  } = props

  return (
    <IonMenu contentId={contentId} {...rest}>
      <IonHeader>
        <IonToolbar color={toolbarColor}>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList lines='none'>
          <IonMenuToggle menu={props.menuId}>
            {links.map(link => (
              <IonItem
                key={link.path}
                button
                routerLink={link.path}
                routerDirection={link.direction}
              >
                <IonIcon icon={link.icon} color={toolbarColor} slot='start' />
                <IonText color={toolbarColor}>{link.title}</IonText>
              </IonItem>
            ))}
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default Menu
