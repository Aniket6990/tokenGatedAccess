import { useMutation, useQuery } from 'react-query';
import ky from 'ky';
import { Config } from '../../../Config';
import { useWeb3 } from '../../web3/components/Web3Provider';

export function useRequestAccess<Props>(gateId: string) {
	const { sign } = useWeb3();
	return useMutation((props: Props) => {
		return ky
			.post(`${Config.backend}/apps/requestAccess`, { json: { sign, props, gateId } })
			.json<{ redirect: string }>();
	});
}
