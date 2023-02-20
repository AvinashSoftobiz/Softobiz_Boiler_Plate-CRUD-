
import { ValueObject, Result } from "@softobiz-df/shared-lib";

interface IAddressProps {
	// isAuth: boolean
	
}
/**
 * The Address Class
 *
 * @export
 * @class Address
 * @extends {ValueObject<IAddressProps>}
 */
export class Address extends ValueObject<IAddressProps> {
    
    /**
     * Creates an instance of Address.
     * @param {IAddressProps} props
     * @memberof Address
     */
    private constructor(props: IAddressProps) {
        super(props);
    }

    /**
     * Creates and initializes object for the Address Class using the private constructor after validations
     *
     * @static
     * @param {IAddressProps} props
     * @returns {Result<Address>}
     * @memberof Address
     */
    public static create(props: IAddressProps): Result<Address> {
        throw new Error("NotImplemented: This method is not implemented");
    }
}
