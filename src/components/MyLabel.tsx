import './mylabel.css'

export interface MyLabelProps {
    /**
        * Is this all capitalize label
    */
     allCaps?: boolean;
    /**
        * Is this is message in label
    */
     label: string;
    /**
        * Is this size of label
    */
     size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
        * Is this color label
    */
     color?: 'primary' | 'secondary' | 'tertiary';
    /**
        * Is this font color label
    */ 
    fontColor?: string;
}

export const MyLabel = ({
    label = 'No Label', 
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor = ''
}: MyLabelProps ) => {
  return (
    <span 
        className={`label ${ size } text-${ color }`}
        style={{ color: fontColor }}
    >
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
