package dtos;

import model.Cadastro;

public class CadastroDTO {
	
	private String nome; 
	private String cpf; 
	private Long tipoCliente; 
	private String sexo;
	private Long situacaoCliente;
	
	
	public CadastroDTO(String nome, String cpf, Long tipoCliente, String sexo, Long situacaoCliente) {
		this.nome = nome; 
		this.cpf = cpf; 
		this.tipoCliente = tipoCliente;
		this.sexo = sexo; 
		this.situacaoCliente = situacaoCliente;
	}
	
	public CadastroDTO(Cadastro cadastro) {
		nome = cadastro.getNome();
		cpf = cadastro.getCpf();
		tipoCliente = cadastro.getTipoCliente();
		sexo = cadastro.getSexo();
		situacaoCliente = cadastro.getSituacaoCliente();		
	}	
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public Long getTipoCliente() {
		return tipoCliente;
	}
	public void setTipoCliente(Long tipoCliente) {
		this.tipoCliente = tipoCliente;
	}
	public String getSexo() {
		return sexo;
	}
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	public Long getSituacaoCliente() {
		return situacaoCliente;
	}
	public void setSituacaoCliente(Long situacaoCliente) {
		this.situacaoCliente = situacaoCliente;
	} 
}
