/**
 * External dependencies
 */
import { CheckboxControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { EnrichedLabel, useFormContext } from '@woocommerce/components';
import { Product } from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import { ProductSectionLayout } from '../layout/product-section-layout';
import { getCheckboxProps, getTextControlProps } from './utils';

const PRODUCT_DETAILS_SLUG = 'product-details';

export const ProductDetailsSection: React.FC = () => {
	const { getInputProps } = useFormContext< Product >();

	return (
		<ProductSectionLayout
			title={ __( 'Product details', 'woocommerce' ) }
			description={ __(
				'This info will be displayed on the product page, category pages, social media, and search results.',
				'woocommerce'
			) }
		>
			<TextControl
				label={ __( 'Name', 'woocommerce' ) }
				name={ `${ PRODUCT_DETAILS_SLUG }-name` }
				placeholder={ __( 'e.g. 12 oz Coffee Mug', 'woocommerce' ) }
				{ ...getTextControlProps( getInputProps( 'name' ) ) }
			/>
			<CheckboxControl
				label={
					<EnrichedLabel
						label={ __( 'Feature this product', 'woocommerce' ) }
						helpDescription={ __(
							'Include this product in a featured section on your website with a widget or shortcode.',
							'woocommerce'
						) }
						moreUrl="https://woocommerce.com/document/woocommerce-shortcodes/#products"
						tooltipLinkCallback={ () =>
							recordEvent( 'add_product_learn_more', {
								category: PRODUCT_DETAILS_SLUG,
							} )
						}
					/>
				}
				{ ...getCheckboxProps( {
					...getInputProps( 'featured' ),
					name: 'featured',
				} ) }
			/>
		</ProductSectionLayout>
	);
};
