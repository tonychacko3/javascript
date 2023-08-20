//challenge 2.1

var a='sunday'

switch (a) {
    case 'sunday':
        console.log('sunday')
        
        break;
        case 'monday':
            console.log('monday')
            break;
            case 'tuesday':
                console.log('tuesday')
                break;
                case 'wednesday':
                    console.log('wednesday')
                    break;
                    case 'thursday':
                        console.log('thursday')
                        break;
                        case 'friday':
                            console.log('friday')
                            break;
                            case 'saturday':
                                console.log('saturday')
                                break;

    default:
        console.log('please type correct value')
        break;
}



// challenge 2.2

switch (new Date().getDay()) {
    case 0:
        console.log('sunday')
        
        break;
        case 1:
            console.log('monday')
            break;
            case 2:
                console.log('tuesday')
                break;
                case 3:
                    console.log('wednesday')
                    break;
                    case 4:
                        console.log('thursday')
                        break;
                        case 5:
                            console.log('friday')
                            break;
                            case 6:
                                console.log('saturday')
                                break;
                            }